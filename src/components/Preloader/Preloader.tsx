import { Spinner } from "native-base"
import colors from "../../styles/colors"

const Preloader = () => {
    return (
        <Spinner 
            size={50}
            color={colors.primary}
        />
    )
}

export default Preloader