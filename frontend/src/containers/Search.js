import React from 'react'
import { connect } from 'react-redux'
import { getSearchResult } from 'store/actions'
import { Search } from 'components'

const SearchContainer = props => <Search {...props} />

const mapStateToProps = state => ({
  help: state,
})

const mapDispatchToProps = dispatch => ({
  getSearchResult: value => dispatch(getSearchResult(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)