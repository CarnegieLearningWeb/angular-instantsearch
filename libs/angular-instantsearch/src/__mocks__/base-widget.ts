import { Directive, OnDestroy, OnInit } from '@angular/core';
import { Widget } from 'instantsearch.js';
import { bem } from '../utils';

export type Connector = (
  renderFn: (state: object, isFirstRendering: boolean) => void,
  unmountFn: () => void
) => (widgetOptions?: object) => Widget;

@Directive()
export class BaseWidget implements OnInit, OnDestroy {
  public widget?: Widget;
  public state?: object;
  public cx?: ReturnType<typeof bem>;

  constructor(widgetName: string) {
    this.cx = bem(widgetName);
  }

  public createWidget(connector: Connector, _options: object = {}) {
    // nothing to do, test env
  }

  public ngOnInit() {
    // nothing to do, test env
  }

  public ngOnDestroy() {
    // nothing to do, test env
  }

  public updateState = (state, _isFirstRendering): Promise<void> | void => {
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
