import LoginForm from "../components/login-page/LoginForm";

function Login() {
  return (
    <section className="py-6">
      <div className="container">
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-[25px] text-[#3cb47c] mb-5">Login</h2>
          <LoginForm />
        </div>
      </div>
    </section>
  )
}

export default Login;