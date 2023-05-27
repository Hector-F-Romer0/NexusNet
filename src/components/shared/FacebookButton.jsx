import React from "react";
import { authentication } from "../../../firebase.config";
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";

const FacebookButton = () => {
	const signInWithFacebook = () => {
		const provider = new FacebookAuthProvider();
		signInWithPopup(authentication, provider)
			.then((result) => {
				// Comprobar si el inicio de sesión se completó correctamente
				if (result && result.user) {
					console.log("Inicio de sesión exitoso:", result.user);
					// Realizar acciones adicionales después del inicio de sesión exitoso
				} else {
					console.log("Inicio de sesión cancelado por el usuario o cerrado manualmente.");
					// Mostrar un mensaje apropiado al usuario si el inicio de sesión se canceló o cerró manualmente
				}
			})
			.catch((error) => {
				console.log("Error durante el inicio de sesión:", error);
				// Mostrar un mensaje de error si ocurre algún error durante el inicio de sesión
			});
	};

	return (
		<button
			onClick={signInWithFacebook}
			type="button"
			className="flex break-inside bg-white text-black border-2 border-blue-200 rounded-3xl px-6 py-3 mb-4 w-full">
			<div className="m-auto">
				<div className="flex items-center justify-start flex-1 space-x-4">
					<svg width="25" height="25" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"
						/>
					</svg>
					<span className="font-medium mb-[-2px] text-xs lg:text-base">Continue with Facebook</span>
				</div>
			</div>
		</button>
	);
};

export default FacebookButton;
