import { Navigate } from "react-router-dom"

export const ProtectedRoutes = ({children}) => {

    //     const { usersDB } = useSelector((state) => state.usersDB);
    //     const { providers } = useSelector((state) => state.providers);
    //     let existsUser = "";
	// 	const existsClient = usersDB.find((user) => user.username == data.username);
	// 	const existsProvider = providers.find((provider) => provider.username == data.username);

	// 	if (existsClient?.typeUser === "client") {
	// 		existsUser = "client";
	// 	} else if (existsClient?.typeUser === "admin"){
    //         existsUser = "admin";
    //     } else if (existsProvider) {
	// 		existsUser = "provider";
	// 	} else {
	// 		existsUser = null;
	// 	}
	// 	console.log(existsUser);


    //  if(!user){
    //     return <Navigate to="/"/>
    //  }

  return <>{children}
  </>
}