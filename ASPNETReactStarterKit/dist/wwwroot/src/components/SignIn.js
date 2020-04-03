"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Avatar_1 = require("@material-ui/core/Avatar");
const Button_1 = require("@material-ui/core/Button");
const CssBaseline_1 = require("@material-ui/core/CssBaseline");
const TextField_1 = require("@material-ui/core/TextField");
const FormControlLabel_1 = require("@material-ui/core/FormControlLabel");
const Checkbox_1 = require("@material-ui/core/Checkbox");
const Link_1 = require("@material-ui/core/Link");
const Grid_1 = require("@material-ui/core/Grid");
const Box_1 = require("@material-ui/core/Box");
const LockOutlined_1 = require("@material-ui/icons/LockOutlined");
const Typography_1 = require("@material-ui/core/Typography");
const styles_1 = require("@material-ui/core/styles");
const Container_1 = require("@material-ui/core/Container");
function Copyright() {
    return (React.createElement(Typography_1.default, { variant: "body2", color: "textSecondary", align: "center" },
        'Copyright © ',
        React.createElement(Link_1.default, { color: "inherit", href: "https://material-ui.com/" }, "Your Website"),
        ' ',
        new Date().getFullYear(),
        '.'));
}
const useStyles = styles_1.makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
function SignIn() {
    const classes = useStyles();
    return (React.createElement(Container_1.default, { component: "main", maxWidth: "xs" },
        React.createElement(CssBaseline_1.default, null),
        React.createElement("div", { className: classes.paper },
            React.createElement(Avatar_1.default, { className: classes.avatar },
                React.createElement(LockOutlined_1.default, null)),
            React.createElement(Typography_1.default, { component: "h1", variant: "h5" }, "Sign in"),
            React.createElement("form", { className: classes.form, noValidate: true },
                React.createElement(TextField_1.default, { variant: "outlined", margin: "normal", required: true, fullWidth: true, id: "email", label: "Email Address", name: "email", autoComplete: "email", autoFocus: true }),
                React.createElement(TextField_1.default, { variant: "outlined", margin: "normal", required: true, fullWidth: true, name: "password", label: "Password", type: "password", id: "password", autoComplete: "current-password" }),
                React.createElement(FormControlLabel_1.default, { control: React.createElement(Checkbox_1.default, { value: "remember", color: "primary" }), label: "Remember me" }),
                React.createElement(Button_1.default, { type: "submit", fullWidth: true, variant: "contained", color: "primary", className: classes.submit }, "Sign In"),
                React.createElement(Grid_1.default, { container: true },
                    React.createElement(Grid_1.default, { item: true, xs: true },
                        React.createElement(Link_1.default, { href: "#", variant: "body2" }, "Forgot password?")),
                    React.createElement(Grid_1.default, { item: true },
                        React.createElement(Link_1.default, { href: "#", variant: "body2" }, "Don't have an account? Sign Up"))))),
        React.createElement(Box_1.default, { mt: 8 },
            React.createElement(Copyright, null))));
}
exports.SignIn = SignIn;
//# sourceMappingURL=SignIn.js.map