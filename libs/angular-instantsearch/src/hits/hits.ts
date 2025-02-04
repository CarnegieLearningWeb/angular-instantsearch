import {
  Inject,
  Input,
  Component,
  ContentChild,
  TemplateRef,
  forwardRef,
  Optional,
} from '@angular/core';

import { connectHitsWithInsights } from 'instantsearch.js/es/connectors';
import {
  HitsConnectorParams,
  HitsWidgetDescription,
  HitsRenderState,
} from 'instantsearch.js/es/connectors/hits/connectHits';
import { TypedBaseWidget } from '../typed-base-widget';
import { NgAisInstantSearch } from '../instantsearch/instantsearch';
import { NgAisIndex } from '../index-widget/index-widget';
import { noop } from 'instantsearch.js/es/lib/utils';

@Component({
    selector: 'ais-hits',
    template: `
    <div [class]="cx()">
      <ng-container *ngTemplateOutlet="template; context: state"></ng-container>

      <!-- default rendering if no template specified -->
      <div *ngIf="!template">
        <ul [class]="cx('list')">
          <li [class]="cx('item')" *ngFor="let hit of state.hits">
            <ais-highlight attribute="name" [hit]="hit"> </ais-highlight>
          </li>
        </ul>
      </div>
    </div>
  `,
    standalone: false
})
export class NgAisHits extends TypedBaseWidget<
  HitsWidgetDescription,
  HitsConnectorParams
> {
  @ContentChild(TemplateRef, { static: false })
  public template: TemplateRef<unknown> | null = null;

  @Input() public escapeHTML?: HitsConnectorParams['escapeHTML'];
  @Input() public transformItems?: HitsConnectorParams['transformItems'];

  public state: HitsRenderState = {
    hits: [],
    results: undefined,
    items: [],
    sendEvent: noop,
    bindEvent: () => '',
  };

  constructor(
    @Inject(forwardRef(() => NgAisIndex))
    @Optional()
    public parentIndex: NgAisIndex,
    @Inject(forwardRef(() => NgAisInstantSearch))
    public instantSearchInstance: NgAisInstantSearch
  ) {
    super('Hits');
  }

  ngOnInit() {
    this.createWidget(
      connectHitsWithInsights,
      {
        escapeHTML: this.escapeHTML,
        transformItems: this.transformItems,
      },
      {
        $$widgetType: 'ais.hits',
      }
    );
    super.ngOnInit();
  }

  public updateState = (state: HitsRenderState, isFirstRendering: boolean) => {
    if (isFirstRendering) return;
    this.state = state;
  };
}
