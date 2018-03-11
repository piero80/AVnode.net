import {h, render, Component} from 'preact';
import {reduxForm, Field} from "redux-form";
import {FORM_NAME} from './constants'
import {inputPassword, inputPasswordMeter} from "../../common/form/components";
import validate from './validate'
//import asyncValidate from './asyncValidate'

class ProfilePasswordForm extends Component {

    render() {

        const {
            submitting,
            handleSubmit,
        } = this.props;

        return (
            <form onSubmit={handleSubmit}>

                <Field
                    name="password"
                    component={inputPasswordMeter}
                    placeholder="Password"
                />

                <Field
                    name="confirmPassword"
                    component={inputPassword}
                    placeholder="Confirm Password"
                />

                <button
                    type="submit"
                    disabled={submitting}
                    className="btn btn-primary">
                    Save
                </button>

            </form>
        );
    }

}

export default reduxForm({
    form: FORM_NAME,
    enableReinitialize: true,
    keepDirtyOnReinitialize: true,
    validate,
    //asyncValidate,
    //asyncBlurFields: ['slug', 'addresses']
})(ProfilePasswordForm);
