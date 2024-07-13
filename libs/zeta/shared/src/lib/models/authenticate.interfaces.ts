import { ButtonName, ScreenView } from "../types/authenticate.type";

export interface ScreenAction {
    currentView: ScreenView;
    nextView?: ScreenView;
    previousView?:ScreenView;
    buttonName?: ButtonName;
    deviceType?: string;
}
