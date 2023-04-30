import React from 'react';
import Main from './components/Main.jsx'

export default function Login(props) {
    return(
    <Main>
        <div className="hero min-h-fit bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold text-primary">Close the <span className="text-secondary">Understanding Gap</span></h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <section className="col-6 mt-5">
                    {props.messages.errors 
                        ? props.messages.errors.map(el, id => 
                            <div key={id} className="alert alert-danger">{el.msg}</div>
                        ) 
                    : null
                    }
                    {props.messages.info 
                        ? props.messages.info.map(el, id => 
                            <div key={id} className="alert alert-danger">{el.msg}</div>
                        ) 
                    : null
                    }
                <form action="/login" method="POST">
                <div className="card-body form-control">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input 
                    type="email"  
                    className="input input-bordered min-w-full" 
                    placeholder="email" 
                    id="email" 
                    name="email" 
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                    <span className="label-text">Password</span>
                    </label>
                    <input 
                    type="password"
                    className="input input-bordered min-w-full"
                    placeholder="password" 
                    id="password"
                    name="password" 
                    />
                    <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control">
                    <button type="submit" className="btn btn-primary min-w-full mt-2">Login</button>
                    </div>
                    </div>
                </form>
                </section>
            </div>
            </div>
        </div>
    </Main>
  )
}


