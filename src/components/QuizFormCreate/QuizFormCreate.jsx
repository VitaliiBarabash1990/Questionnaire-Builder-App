import { Field, Form, Formik } from "formik";
import s from "./QuizFormCreate.module.css";
import { useState } from "react";

export const QuizFormCreate = () => {
	const [isType, setIsType] = useState("text");

	const initialValue = {
		text: "",
	};

	const handleSubmit = (values) => {
		const data = {
			text: values.text,
			type: values.type,
		};
		setIsType(data.type);
		console.log("Data", data);
	};
	console.log("isType", isType);

	return (
		<>
			<Formik initialValues={initialValue} onSubmit={handleSubmit}>
				<Form className={s.Form}>
					<div className={s.form_fields}>
						<label htmlFor="input" className={s.teacher_label}>
							Question
						</label>
						<Field type="input" name="text" />
					</div>

					<div className={s.form_fields}>
						<label htmlFor="type" className={s.teacher_label}>
							Type
						</label>
						<Field as="select" name="type" className={s.teacher_select}>
							<option value="text">Text</option>
							<option value="radio">Radio Button</option>
							<option value="checkbox">Checkbox</option>
						</Field>
					</div>

					<button type="submit" className={s.btn}>
						Add Quiz
					</button>
				</Form>
			</Formik>
			{isType === "text" && <h1>{isType}</h1>}
			{isType === "radio" && <h1>{isType}</h1>}
			{isType === "checkbox" && <h1>{isType}</h1>}
		</>
	);
};

// <form className={s.teacher_form}>
// 	<ul className={s.teacher_search_list}>
// 		<li className={s.teacher_search_item}>
// 			<label htmlFor="lang" className={s.teacher_label}>
// 				Languages
// 			</label>
// 			<select
// 				id="lang"
// 				name="language"
// 				value={formData.language || ""}
// 				onChange={handleChange}
// 				className={s.teacher_select}
// 			>
// 				<option value="-">-</option>
// 				{languages.map((lang, index) => (
// 					<option key={index} value={lang}>
// 						{lang}
// 					</option>
// 				))}
// 			</select>
// 		</li>

// 		<li className={s.teacher_search_item}>
// 			<label htmlFor="level" className={s.teacher_label}>
// 				Level of knowledge
// 			</label>
// 			<select
// 				id="level"
// 				name="level"
// 				value={formData.level || ""}
// 				onChange={handleChange}
// 				className={s.teacher_select}
// 			>
// 				<option value="-">-</option>
// 				{levels.map((level, index) => (
// 					<option key={index} value={level}>
// 						{level}
// 					</option>
// 				))}
// 			</select>
// 		</li>

// 		<li className={s.teacher_search_item}>
// 			<label htmlFor="price" className={s.teacher_label}>
// 				Price
// 			</label>
// 			<select
// 				id="price"
// 				name="price"
// 				value={formData.price || ""}
// 				onChange={handleChange}
// 				className={s.teacher_select}
// 			>
// 				<option value="-">-</option>
// 				{prices.map((price, index) => (
// 					<option key={index} value={price}>
// 						{price}
// 					</option>
// 				))}
// 			</select>
// 		</li>
// 	</ul>
// </form>;
