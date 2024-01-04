import { Directive, OnDestroy, OnInit } from '@angular/core';
import { bem } from '../utils';
import {
  Widget,
  Connector,
  Renderer,
  WidgetDescription,
  UnknownWidgetParams,
} from 'instantsearch.js/es/types';

@Directive()
export class TypedBaseWidget<
  TWidgetDescription extends WidgetDescription,
  TConnectorParams extends UnknownWidgetParams
> implements OnInit, OnDestroy
{
  public widget?: Widget;
  public state?: object;
  public cx?: ReturnType<typeof bem>;

  constructor(widgetName: string) {
    this.cx = bem(widgetName);
  }

  public createWidget(
    _connector: Connector<TWidgetDescription, TConnectorParams>,
    _options: TConnectorParams
  ) {
    // nothing to do, test env
  }

  public ngOnInit() {
    // nothing to do, test env
  }

  public ngOnDestroy() {
    // nothing to do, test env
  }

  public updateState: Renderer<
    TWidgetDescription['renderState'],
    TConnectorParams
  > = (state, _isFirstRendering) => {
    this.state = state;
  };

  public getItemClass(item: { isRefined?: boolean }) {
    let className = this.cx('item');

    if (item.isRefined) {
      className = `${className} ${this.cx('item', 'selected')}`;
    }

    return className;
  }
}
