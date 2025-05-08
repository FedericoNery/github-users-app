import { useSearchUsername } from "@/hooks/users/home/useSearchUsername";
import TextInputComponent from "../TextInput";

const SearchUserComponent = () => {
    const { searchUsernameValue, setSearchUsernameValue } = useSearchUsername();
    return <TextInputComponent text={searchUsernameValue} onChangeText={(text) => setSearchUsernameValue(text)} />
}
 
export default SearchUserComponent;