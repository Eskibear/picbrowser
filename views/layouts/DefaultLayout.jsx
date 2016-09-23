var React = require('react');
var Header = require('./Header');
var Footer = require('./Footer');

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
      <head>
        <title>{this.props.title}</title>
        <link rel="stylesheet" href="stylesheets/bootstrap.min.css"/>
        <link rel="stylesheet" href="stylesheets/style.css"/>
      </head>
      <body>
      <Header></Header>
        {this.props.children}
      <Footer></Footer>
      </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;