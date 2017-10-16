'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactModal = require('react-modal');

var _reactModal2 = _interopRequireDefault(_reactModal);

var _markupFrame = require('markup-frame');

var _markupFrame2 = _interopRequireDefault(_markupFrame);

var _reactRedux = require('react-redux');

var _redux = require('redux');

require('../static/bootstrap.css');

require('../static/custom.css');

var _action = require('./action');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportClient = function (_Component) {
  _inherits(ReportClient, _Component);

  function ReportClient(props) {
    _classCallCheck(this, ReportClient);

    var _this = _possibleConstructorReturn(this, (ReportClient.__proto__ || Object.getPrototypeOf(ReportClient)).call(this, props));

    _this.closeModal = _this.closeModal.bind(_this);
    return _this;
  }

  _createClass(ReportClient, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.runReport(this.props.reportId);
    }
  }, {
    key: 'closeModal',
    value: function closeModal() {
      this.props.closePreview();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return this.props.report.preview.show ? _react2.default.createElement(
        _reactModal2.default,
        {
          isOpen: this.props.report.preview.show,
          onRequestClose: this.closeModal,
          style: customStyles
        },
        _react2.default.createElement(_markupFrame2.default, { markup: this.props.report.preview.html }),
        _react2.default.createElement(
          'button',
          { type: 'button', className: 'btn btn-danger btn-block', onClick: function onClick() {
              _this2.closeModal();
            } },
          'Close'
        )
      ) : _react2.default.createElement('div', null);
    }
  }]);

  return ReportClient;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return { report: state.report };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    closePreview: _action.closePreview,
    runReport: _action.runReport
  }, dispatch);
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ReportClient);