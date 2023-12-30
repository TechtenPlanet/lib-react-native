import Parse from 'parse/react-native'
import { IMessage as IGiftedChatMessage } from "react-native-gifted-chat";

export interface IMessage extends Parse.Object, IGiftedChatMessage {
}
