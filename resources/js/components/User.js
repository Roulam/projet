import React from 'react';
import ReactDOM from 'react-dom';

export default class User extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentWillMount() {
        let $this = this;
    }
    render() {
        return (
            <div className="col-md-8">
                <h3 >Login Form</h3>
                <form method="post" action="">
                    <div className="form-group">
                        <label>Enter Email</label>
                        <input type="email" name="email" class="form-control" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label>Enter Password</label>
                        <input type="password" name="password" class="form-control" placeholder="Enter password" />
                        <small id="passwordHelpInline" class="text-muted">
                            Password should contain letter and numbers
                        </small>

                    </div>
                    <div className="form-group">
                        <input type="submit" name="login" class="btn btn-primary" value="Login" />
                    </div>
                </form>
            </div>



        )

    }
}


if (document.getElementById('app')) {
    ReactDOM.render(<User />, document.getElementById('app'));
}