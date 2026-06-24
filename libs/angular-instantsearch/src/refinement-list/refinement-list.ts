import { Component, Input, Inject, forwardRef, Optional } from '@angular/core';
import { connectRefinementList } from 'instantsearch.js/es/connectors';
import { TypedBaseWidget } from '../typed-base-widget';
import { NgAisInstantSearch } from '../instantsearch/instantsearch';
import { NgAisIndex } from '../index-widget/index-widget';
import { noop, parseNumberInput } from '../utils';
import {
  RefinementListConnectorParams,
  RefinementListWidgetDescription,
  RefinementListRenderState,
  RefinementListItem,
} from 'instantsearch.js/es/connectors/refinement-list/connectRefinementList';

@Component({
    selector: 'ais-refinement-list',
    template: `
    @if (!isHidden) {
      <div [class]="cx()">
        @if (searchable) {
          <div [class]="cx('searchBox')">
            <ais-facets-search
              [search]="state.searchForItems"
              [searchPlaceholder]="searchPlaceholder"
              >
            </ais-facets-search>
          </div>
        }
        <ul [class]="cx('list')">
          @for (item of state.items; track item.value) {
            <li
              [class]="getItemClass(item)"
              (click)="refine($event, item)"
              >
              <label [class]="cx('label')">
                <input
                  [class]="cx('checkbox')"
                  type="checkbox"
                  value="{{ item.value }}"
                  [checked]="item.isRefined"
                  />
                <span [class]="cx('labelText')">
                  <ais-highlight
                    attribute="highlighted"
                    [hit]="item"
                  ></ais-highlight>
                </span>
                <span [class]="cx('count')">{{ item.count }}</span>
              </label>
            </li>
          }
        </ul>
        @if (showMore) {
          <button
            [class]="cx('showMore')"
            (click)="state.toggleShowMore()"
            [disabled]="!state.canToggleShowMore"
            >
            {{ state.isShowingMore ? showLessLabel : showMoreLabel }}
          </button>
        }
      </div>
    }
    `,
    standalone: false
})
export class NgAisRefinementList extends TypedBaseWidget<
  RefinementListWidgetDescription,
  RefinementListConnectorParams
> {
  // rendering options
  @Input() public showMoreLabel: string = 'Show more';
  @Input() public showLessLabel: string = 'Show less';
  @Input() public searchable?: boolean;
  @Input() public searchPlaceholder: string = 'Search here...';

  // instance options
  @Input() public attribute: RefinementListConnectorParams['attribute'];
  @Input() public operator: RefinementListConnectorParams['operator'];
  @Input() public limit: RefinementListConnectorParams['limit'];
  @Input() public showMore: RefinementListConnectorParams['showMore'];
  @Input() public showMoreLimit: RefinementListConnectorParams['showMoreLimit'];
  @Input() public sortBy: RefinementListConnectorParams['sortBy'];
  @Input()
  public transformItems?: RefinementListConnectorParams['transformItems'];

  public state: RefinementListRenderState = {
    canRefine: false,
    canToggleShowMore: false,
    createURL: () => '',
    isShowingMore: false,
    items: [],
    refine: noop,
    toggleShowMore: noop,
    searchForItems: noop,
    isFromSearch: false,
    hasExhaustiveItems: false,
    sendEvent: noop,
  };

  get isHidden() {
    return this.state.items.length === 0 && this.autoHideContainer;
  }

  constructor(
    @Inject(forwardRef(() => NgAisIndex))
    @Optional()
    public parentIndex: NgAisIndex,
    @Inject(forwardRef(() => NgAisInstantSearch))
    public instantSearchInstance: NgAisInstantSearch
  ) {
    super('RefinementList');
  }

  public ngOnInit() {
    this.createWidget(
      connectRefinementList,
      {
        showMore: this.showMore,
        limit: parseNumberInput(this.limit),
        showMoreLimit: parseNumberInput(this.showMoreLimit),
        attribute: this.attribute,
        operator: this.operator,
        sortBy: this.sortBy,
        escapeFacetValues: true,
        transformItems: this.transformItems,
      },
      {
        $$widgetType: 'ais.refinementList',
      }
    );

    super.ngOnInit();
  }

  public refine(event: MouseEvent, item: RefinementListItem) {
    event.preventDefault();
    event.stopPropagation();

    if (this.state.canRefine) {
      // update UI directly, it will update the checkbox state
      item.isRefined = !item.isRefined;

      // refine through Algolia API
      this.state.refine(item.value);
    }
  }
}
