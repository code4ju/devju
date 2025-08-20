"use client"

import { useState } from "react";
import "./ContactContent.scss";

export const ContactContent = () => {
	const [form, setForm] = useState({
		name: "",
		phone: "",
		mail: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setForm(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		if (
			form.name === "" ||
			form.phone === "" ||
			form.mail === ""
		) {
			alert("Bitte füllen Sie die Form vollständig aus.");
			setIsSubmitting(false);
			return;
		}

		try {
			// Hier würdest du deine API-Anfrage machen
			// const response = await fetch('/api/send-email', {
			//   method: 'POST',
			//   headers: { 'Content-Type': 'application/json' },
			//   body: JSON.stringify(form)
			// });

			// Simulation
			await new Promise(resolve => setTimeout(resolve, 1500));
			
			alert("Nachricht erfolgreich versendet!");
			setForm({ name: "", phone: "", mail: "" });
		} catch (error) {
			alert("Fehler beim Versenden der Nachricht.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<>
			<div className="outer">
				<div className="inner contact-wrapper">
					<h1>CONTACT</h1>
					<div className="contact-form-wrapper">
						<form onSubmit={handleSubmit}>
							<div className="input-wrapper">
								<input 
									type="text" 
									name="name"
									value={form.name}
									onChange={handleInputChange}
									placeholder="NAME"
									disabled={isSubmitting}
								/>
								<input 
									type="tel" 
									name="phone"
									value={form.phone}
									onChange={handleInputChange}
									placeholder="PHONE"
									disabled={isSubmitting}
								/>
								<input 
									type="email" 
									name="mail"
									value={form.mail}
									onChange={handleInputChange}
									placeholder="MAIL"
									disabled={isSubmitting}
								/>
							</div>
							<button 
								type="submit"
								className={`form-button ${isSubmitting ? 'loading' : ''}`}
								disabled={isSubmitting}
							>
								{isSubmitting ? 'SENDING...' : 'SUBMIT'}
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};