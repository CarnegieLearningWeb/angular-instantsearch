import { storiesOf } from '@storybook/angular';
import { wrapWithHits } from '../wrap-with-hits';
import meta from '../meta';
import { SortByItem } from 'angular-instantsearch/sort-by/sort-by';

storiesOf('SortBy', module)
  .addDecorator(meta)
  .add('default', () => ({
    component: wrapWithHits({
      template: `
      <ais-sort-by
        [items]="[
          { value: 'instant_search', label: 'Most relevant' },
          { value: 'instant_search_price_asc', label: 'Lowest price' },
          { value: 'instant_search_price_desc', label: 'Highest price' }
        ]"
      >
      </ais-sort-by>
    `,
    }),
  }))
  .add('with transformItems', () => ({
    component: wrapWithHits({
      template: `
      <ais-sort-by
        [items]="[
          { value: 'instant_search', label: 'Most relevant' },
          { value: 'instant_search_price_asc', label: 'Lowest price' },
          { value: 'instant_search_price_desc', label: 'Highest price' }
        ]"
        [transformItems]="transformItems"
      >
      </ais-sort-by>
    `,
      methods: {
        transformItems: (items: SortByItem[]) => {
          return items.map((item) => ({
            ...item,
            label: `${item.label} (transformed)`,
          }));
        },
      },
    }),
  }));
