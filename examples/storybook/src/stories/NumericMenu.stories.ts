import { storiesOf } from '@storybook/angular';
import { wrapWithHits } from '../wrap-with-hits';
import meta from '../meta';
import { NumericMenuConnectorParamsItem } from 'instantsearch.js/es/connectors/numeric-menu/connectNumericMenu';

storiesOf('NumericMenu', module)
  .addDecorator(meta)
  .add('default with panel header', () => ({
    component: wrapWithHits({
      template: `
      <ais-panel header="Numeric menu (price)">
        <ais-numeric-menu
          attribute="price"
          [items]="[
            { label: 'All' },
            { end: 4, label: 'less than 4' },
            { start: 4, end: 4, label: '4' },
            { start: 5, end: 10, label: 'between 5 and 10' },
            { start: 10, label: 'more than 10' }
          ]"
        >
        </ais-numeric-menu>
      </ais-panel>
    `,
    }),
  }))
  .add('with transformItems', () => {
    const transformItems = (items: NumericMenuConnectorParamsItem[]) => {
      return items.map((item) => ({
        ...item,
        label: `${item.label} (transformed)`,
      }));
    };
    return {
      component: wrapWithHits({
        template: `
        <ais-numeric-menu
          attribute="price"
          [items]="[
            { label: 'All' },
            { end: 4, label: 'less than 4' },
            { start: 4, end: 4, label: '4' },
            { start: 5, end: 10, label: 'between 5 and 10' },
            { start: 10, label: 'more than 10' }
          ]"
          [transformItems]="transformItems"
        >
        </ais-numeric-menu>
        `,
        methods: { transformItems },
      }),
    };
  });
