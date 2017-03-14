import SearchStore from 'vue-algolia-search-store'
import SearchInput from 'vue-algolia-search-input'
import SearchResults from 'vue-algolia-search-results'
import SearchStats from 'vue-algolia-search-stats'
import RangedPagination from 'vue-algolia-ranged-pagination'
import ResultsPerPageSelector from 'vue-algolia-results-per-page-selector'
import NavigationTreeFacet from 'vue-algolia-navigation-tree-facet'
import SortBySelector from 'vue-algolia-sort-by-selector'
import ClearSearch from 'vue-algolia-clear-search'
import StarsFacet from 'vue-algolia-stars-facet'
import EmptyResults from 'vue-algolia-empty-results'
import SearchFacet from 'vue-algolia-search-facet'
import PriceRangeFacet from 'vue-algolia-price-range-facet'

const Algolia = {
  SearchStore,
  SearchInput,
  SearchResults,
  SearchStats,
  RangedPagination,
  ResultsPerPageSelector,
  NavigationTreeFacet,
  SortBySelector,
  ClearSearch,
  StarsFacet,
  EmptyResults,
  SearchFacet,
  PriceRangeFacet,

  install (Vue) {
    Vue.component('search-store', SearchStore)
    Vue.component('search-input', SearchInput)
    Vue.component('search-results', SearchResults)
    Vue.component('search-stats', SearchStats)
    Vue.component('ranged-pagination', RangedPagination)
    Vue.component('results-per-page-selector', ResultsPerPageSelector)
    Vue.component('navigation-tree-facet', NavigationTreeFacet)
    Vue.component('sort-by-selector', SortBySelector)
    Vue.component('clear-search', ClearSearch)
    Vue.component('stars-facet', StarsFacet)
    Vue.component('empty-results', EmptyResults)
    Vue.component('search-facet', SearchFacet)
    Vue.component('price-range-facet', PriceRangeFacet)
  }

}

// Automatically register Algolia Search components if Vue is available globally
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Algolia);
}

export default Algolia

export {SearchStore}
export {SearchInput}
export {SearchResults}
export {SearchStats}
export {RangedPagination}
export {ResultsPerPageSelector}
export {NavigationTreeFacet}
export {SortBySelector}
export {ClearSearch}
export {StarsFacet}
export {EmptyResults}
export {SearchFacet}
export {PriceRangeFacet}
