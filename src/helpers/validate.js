import { supportedRoles } from "./constants"

export const checkIfValidRole = (role) => {
    if (supportedRoles.includes(role)) {
        return true
    }
    else {
        window.location.href = "/"
    }
}