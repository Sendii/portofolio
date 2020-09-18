import React from 'react'

class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      redirect: false
    }
    this.login = this.login.bind(this)
    this.onChange = this.onChange.bind(this)    
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  login(){
    var code = 'aa'
    if (this.state.username && this.state.password) {
        if (code === "aa") {
          sessionStorage.setItem('userData', 'ini user')
          sessionStorage.setItem('keyData', '12121')
          this.setState({redirect: true})
        }else{
          console.log('gagal')
        }
    }
  }

  render() {
    const redirect = (
      window.location.href.slice(0, window.location.href.lastIndexOf('/') + 1) + ""
      )
    if (this.state.redirect) {
      window.location = redirect
    }

    if (sessionStorage.getItem('userData')) {
      window.location = redirect
    }

    return (
      <div>
      <div className="form-group">
      <label>Username</label>
      <input type="text" className="form-control" name="username" placeholder="Enter Username" onChange={this.onChange} value={this.state.username} />
      </div>
      <div className="form-group">
      <label>Password</label>
      <input type="password" className="form-control" name="password" onChange={this.onChange} value={this.state.password} placeholder="Password" />
      </div>
      <button type="submit" className="btn btn-outline-primary float-right" onClick={this.login}>Submit</button>
      </div>
      )
  }
}
export default Login