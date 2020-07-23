
module.exports = {
    validateToken: async(token) => {
        try {
            // decode token
            if (token) {
                // verifies secret and checks exp
                if( token !="basic eyJ0eXAiOiJKV1QiLCJhbsciOiJIUzI1NiJ9."){
                    return {
                        error: true,
                        message: "Acceso denegado."
                    };
                }
                return  {
                    error: false,
                    message: "Acceso."
                }; 
            } else {
                return {
                    error: true,
                    message: "Acceso denegado."
                };
            }
        } catch (error) {
            return {
                error: true,
                message: error.message
            }
        }
    },
   
}