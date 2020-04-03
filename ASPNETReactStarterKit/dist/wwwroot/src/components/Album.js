"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const AppBar_1 = require("@material-ui/core/AppBar");
const Button_1 = require("@material-ui/core/Button");
const Card_1 = require("@material-ui/core/Card");
const CardActions_1 = require("@material-ui/core/CardActions");
const CardContent_1 = require("@material-ui/core/CardContent");
const CardMedia_1 = require("@material-ui/core/CardMedia");
const CssBaseline_1 = require("@material-ui/core/CssBaseline");
const Grid_1 = require("@material-ui/core/Grid");
const Toolbar_1 = require("@material-ui/core/Toolbar");
const Typography_1 = require("@material-ui/core/Typography");
const styles_1 = require("@material-ui/core/styles");
const Container_1 = require("@material-ui/core/Container");
const Link_1 = require("@material-ui/core/Link");
function Copyright() {
    return (React.createElement(Typography_1.default, { variant: "body2", color: "textSecondary", align: "center" },
        'Copyright © ',
        React.createElement(Link_1.default, { color: "inherit", href: "https://material-ui.com/" }, "Your Website"),
        ' ',
        new Date().getFullYear(),
        '.'));
}
const useStyles = styles_1.makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%',
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function Album() {
    const classes = useStyles();
    return (React.createElement(React.Fragment, null,
        React.createElement(CssBaseline_1.default, null),
        React.createElement(AppBar_1.default, { position: "relative" },
            React.createElement(Toolbar_1.default, null,
                React.createElement(Typography_1.default, { variant: "h6", color: "inherit", noWrap: true }, "Album layout"))),
        React.createElement("main", null,
            React.createElement("div", { className: classes.heroContent },
                React.createElement(Container_1.default, { maxWidth: "sm" },
                    React.createElement(Typography_1.default, { component: "h1", variant: "h2", align: "center", color: "textPrimary", gutterBottom: true }, "Album layout"),
                    React.createElement(Typography_1.default, { variant: "h5", align: "center", color: "textSecondary", paragraph: true }, "Something short and leading about the collection below\u2014its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely."),
                    React.createElement("div", { className: classes.heroButtons },
                        React.createElement(Grid_1.default, { container: true, spacing: 2, justify: "center" },
                            React.createElement(Grid_1.default, { item: true },
                                React.createElement(Button_1.default, { variant: "contained", color: "primary" }, "Main call to action")),
                            React.createElement(Grid_1.default, { item: true },
                                React.createElement(Button_1.default, { variant: "outlined", color: "primary" }, "Secondary action")))))),
            React.createElement(Container_1.default, { className: classes.cardGrid, maxWidth: "md" },
                React.createElement(Grid_1.default, { container: true, spacing: 4 }, cards.map(card => (React.createElement(Grid_1.default, { item: true, key: card, xs: 12, sm: 6, md: 4 },
                    React.createElement(Card_1.default, { className: classes.card },
                        React.createElement(CardMedia_1.default, { className: classes.cardMedia, image: "https://source.unsplash.com/random", title: "Image title" }),
                        React.createElement(CardContent_1.default, { className: classes.cardContent },
                            React.createElement(Typography_1.default, { gutterBottom: true, variant: "h5", component: "h2" }, "Heading"),
                            React.createElement(Typography_1.default, null, "This is a media card. You can use this section to describe the content.")),
                        React.createElement(CardActions_1.default, null,
                            React.createElement(Button_1.default, { size: "small", color: "primary" }, "View"),
                            React.createElement(Button_1.default, { size: "small", color: "primary" }, "Edit"))))))))),
        React.createElement("footer", { className: classes.footer },
            React.createElement(Typography_1.default, { variant: "h6", align: "center", gutterBottom: true }, "Footer"),
            React.createElement(Typography_1.default, { variant: "subtitle1", align: "center", color: "textSecondary", component: "p" }, "Something here to give the footer a purpose!"),
            React.createElement(Copyright, null))));
}
exports.Album = Album;
//# sourceMappingURL=Album.js.map