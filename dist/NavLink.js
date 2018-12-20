'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _rudyMatchPath = require('rudy-match-path');

var _rudyMatchPath2 = _interopRequireDefault(_rudyMatchPath);

var _reduxFirstRouter = require('redux-first-router');

var _PathUtils = require('rudy-history/PathUtils');

var _Link = require('./Link');

var _toUrl = require('./toUrl');

var _toUrl2 = _interopRequireDefault(_toUrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var babelPluginFlowReactPropTypes_proptype_Store = require('redux').babelPluginFlowReactPropTypes_proptype_Store || require('prop-types').any;

var babelPluginFlowReactPropTypes_proptype_Connector = require('react-redux').babelPluginFlowReactPropTypes_proptype_Connector || require('prop-types').any;

var babelPluginFlowReactPropTypes_proptype_To = require('./toUrl').babelPluginFlowReactPropTypes_proptype_To || require('prop-types').any;

var babelPluginFlowReactPropTypes_proptype_OnClick = require('./handlePress').babelPluginFlowReactPropTypes_proptype_OnClick || require('prop-types').any;

var NavLink = function NavLink(_ref) {
  var to = _ref.to,
      href = _ref.href,
      location = _ref.location,
      className = _ref.className,
      style = _ref.style,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === undefined ? 'active' : _ref$activeClassName,
      activeStyle = _ref.activeStyle,
      _ref$ariaCurrent = _ref.ariaCurrent,
      ariaCurrent = _ref$ariaCurrent === undefined ? 'true' : _ref$ariaCurrent,
      exact = _ref.exact,
      strict = _ref.strict,
      isActive = _ref.isActive,
      props = _objectWithoutProperties(_ref, ['to', 'href', 'location', 'className', 'style', 'activeClassName', 'activeStyle', 'ariaCurrent', 'exact', 'strict', 'isActive']);

  to = href || to;

  var options = (0, _reduxFirstRouter.getOptions)();
  var basename = options.basename ? options.basename : '';

  var path = (0, _toUrl2.default)(to, location.routesMap).split('?')[0];

  var match = (0, _rudyMatchPath2.default)(location.pathname, {
    path: (0, _PathUtils.stripBasename)(path, basename),
    exact: exact,
    strict: strict
  });

  var active = !!(isActive ? isActive(match, location) : match);

  var combinedClassName = active ? [className, activeClassName].filter(function (i) {
    return i;
  }).join(' ') : className;

  var combinedStyle = active ? _extends({}, style, activeStyle) : style;

  return _react2.default.createElement(_Link.Link, _extends({
    to: to,
    className: combinedClassName,
    style: combinedStyle,
    'aria-current': active && ariaCurrent,
    routesMap: location.routesMap
  }, props));
};

NavLink.propTypes = {
  dispatch: require('prop-types').func.isRequired,
  location: require('prop-types').any.isRequired,
  to: typeof babelPluginFlowReactPropTypes_proptype_To === 'function' ? babelPluginFlowReactPropTypes_proptype_To.isRequired ? babelPluginFlowReactPropTypes_proptype_To.isRequired : babelPluginFlowReactPropTypes_proptype_To : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_To).isRequired,
  href: typeof babelPluginFlowReactPropTypes_proptype_To === 'function' ? babelPluginFlowReactPropTypes_proptype_To : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_To),
  redirect: require('prop-types').bool,
  replace: require('prop-types').bool,
  children: require('prop-types').any,
  onPress: typeof babelPluginFlowReactPropTypes_proptype_OnClick === 'function' ? babelPluginFlowReactPropTypes_proptype_OnClick : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_OnClick),
  onClick: typeof babelPluginFlowReactPropTypes_proptype_OnClick === 'function' ? babelPluginFlowReactPropTypes_proptype_OnClick : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_OnClick),
  down: require('prop-types').bool,
  shouldDispatch: require('prop-types').bool,
  target: require('prop-types').string,
  className: require('prop-types').string,
  style: require('prop-types').object,
  activeClassName: require('prop-types').string,
  activeStyle: require('prop-types').object,
  ariaCurrent: require('prop-types').string,
  exact: require('prop-types').bool,
  strict: require('prop-types').bool,
  isActive: require('prop-types').func
};
NavLink.contextTypes = {
  store: _propTypes2.default.object.isRequired
};

var mapState = function mapState(state) {
  return { location: (0, _reduxFirstRouter.selectLocationState)(state) };
};
var connector = (0, _reactRedux.connect)(mapState);

// $FlowIgnore
exports.default = connector(NavLink);