import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Link } from 'react-router-dom';

export const LastBanner = () => {
	const form = useRef()

	const [data, setData] = useState({
		name: '',
		email: '',
		telephone: '',
		message: '',
	})

	const handleChange = (e) => {
		const { value, name } = e.target
		setData({ ...data, [name]: value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		emailjs
			.sendForm(
				'service_38t9aii', // Service ID
				'template_3fwwhcr', // Template ID
				form.current,
				'edbbWgFYQF60xVjKt' //Public API_KEY
			)
			.then(() => {
				console.log('hola')
				setData({
					name: '',
					email: '',
					telephone: '',
					message: '',
				})
			})
		// .then(
		// 	(result) => {
		// 		console.log(result.text)
		// 	},
		// 	(error) => {
		// 		console.log(error.text)
		// 	}
		// )
	}

	return (
		<div className="containerImage xl:flex xl:flex-col-reverse ">
			<div className="backgroundOverlay"></div>
			<div className="min-w-[350px] max-w-[1620px] min-h-screen p-20 xl:p-0 xl:pl-28 flex flex-col-reverse sm:flex-col-reverse xl:flex-row-reverse gap-20 2xl:gap-[40%] ">
				{/* Form */}
				<form
					className="flex flex-col justify-center items-center gap-5 w-full z-10"
					ref={form}
					onSubmit={handleSubmit}
				>
					<input
						className="bg-[#D9D9D9A6] rounded-2xl w-64 xl:w-[80%] sm:w-96 py-2 px-4 placeholder:text-gray-800 outline-none"
						type="text"
						name="name"
						placeholder="Nombre"
						value={data.name}
						onChange={handleChange}
					/>
					<input
						type="text"
						className="bg-[#D9D9D9A6] rounded-2xl w-64 xl:w-[80%] sm:w-96 py-2 px-4 placeholder:text-gray-800 outline-none"
						name="email"
						placeholder="Email"
						value={data.email}
						onChange={handleChange}
					/>
					<input
						type="text"
						className="bg-[#D9D9D9A6] rounded-2xl w-64 xl:w-[80%] sm:w-96 py-2 px-4 placeholder:text-gray-800 outline-none"
						name="telephone"
						placeholder="Telephone"
						value={data.telephone}
						onChange={handleChange}
					/>
					<textarea
						type="text"
						rows={4}
						className="bg-[#D9D9D9A6] rounded-2xl w-64 xl:w-[80%] sm:w-96 py-2 px-4 placeholder:text-gray-800 outline-none"
						name="message"
						placeholder="Message"
						value={data.message}
						onChange={handleChange}
					/>
					<button
						type="submit"
						className="rounded-2xl bg-[#133554] px-10 py-2 w-64 xl:w-[80%] sm:w-96 text-white"
					>
						CONTACTAME
					</button>
				</form>
				{/* Cards container */}
				<div className="w-full h-96 xl:h-screen flex justify-center xl:items-start xl:flex-col ">
					<div className="bg-[#D9D9D97A] h-[35%] sm:h-[40%] xl:h-[50%] w-[80%] md:w-[60%] xl:w-[45%] rounded-2xl -rotate-6 absolute"></div>
					<div className="bg-[#D9D9D97A] h-[35%] sm:h-[40%] xl:h-[50%] w-[80%] md:w-[60%] xl:w-[45%] rounded-2xl absolute text-black z-10">
						<div className="flex flex-col justify-center items-center h-full ">
							<div className="w-60 sm:w-96 text-center flex flex-col gap-1 sm:gap-5">
								<h4 className="text-lg sm:text-3xl font-bold">
									SUSCRIBETE A MIS PROGRAMAS SEMANALES
								</h4>
								<p className="text-xs sm:text-lg">
									Assunta es una fuente de luz y sabiduría en el mundo de la
									espiritualidad y el bienestar. Su dedicación a la armonía, la
									expansión de la conciencia y la sanación ha dejado una huella
									indeleble en la vida de quienes la conocen.
								</p>
								<Link to="/podcast">
								<button
									type="button"
									className="rounded-2xl bg-[#3C3D3E] px-10 py-2 text-white text-sm sm:text-lg"
								>
									SUSCRIBIRTE
								</button>
								</Link>
							</div>
						</div>
					</div>
					<div className="bg-[#D9D9D97A] h-[35%] sm:h-[40%] xl:h-[50%] w-[80%] md:w-[60%] xl:w-[45%] rounded-2xl rotate-6 absolute"></div>
				</div>
			</div>
		</div>
	)
}
