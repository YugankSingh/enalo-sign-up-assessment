import "./App.scss"
import { Button, Form, Input, Checkbox, ConfigProvider } from "antd"

function App() {
	const onFinish = () => {
		console.log("On Finish")
	}
	const onFinishFailed = () => {
		console.log("On Finish Failed")
	}

	return (
		<div className="App">
			<ConfigProvider
				theme={{
					colorPrimary: "#00b96b",
				}}
			>
				<div className="login">
					<div className="login-banner"></div>
					<div className="login-main">
						<div className="login-page-logo">
							<img src="/images/logo.png" alt="Logo" />
						</div>
						<div className="login-main-inner">
							<Form
								name="basic"
								// labelCol={{ span: 8 }}
								wrapperCol={{ span: 24 }}
								style={{ maxWidth: 800 }}
								initialValues={{ remember: true }}
								onFinish={onFinish}
								onFinishFailed={onFinishFailed}
								autoComplete="off"
							>
								<div className="login-form-top">
									<h1>Sign Up</h1>
									<p>
										Or <a href="/sign-in">Sign In</a>
									</p>
								</div>
								<Form.Item
									name="email"
									rules={[
										{ required: true, message: "Please input your email!" },
									]}
									className="custom-login-form"
								>
									<Input
										placeholder="Email"
										size="large"
										className="custom-input"
									/>
								</Form.Item>
								<Form.Item
									name="password"
									rules={[
										{ required: true, message: "Please input your password!" },
									]}
								>
									<Input
										placeholder="Password"
										size="large"
										className="custom-input"
									/>
								</Form.Item>
								<Form.Item
									name="password_confirm"
									rules={[
										{ required: true, message: "Please input your email!" },
									]}
								>
									<Input
										placeholder="Re-Enter Password"
										size="large"
										className="custom-input"
									/>
								</Form.Item>

								<Form.Item name="remember_me">
									<Checkbox>Remember Me</Checkbox>
								</Form.Item>

								<Form.Item>
									<Button
										type="primary"
										htmlType="submit"
										block
										size="large"
										className="custom-button"
										style={{
											padding: "14px",
											paddingLeft: "25px",
											borderRadius: "30px",
											fontWeight: "bold",
											height: "calc( 1em + 28px)",
											backgroundColor: "#17b582",
										}}
									>
										Log In
									</Button>
								</Form.Item>
							</Form>
						</div>
					</div>
				</div>
			</ConfigProvider>
		</div>
	)
}

export default App
