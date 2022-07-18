import { SHELL_LOG, SHELL_LOG_CLEAR } from "../types";

export const sendCommand = (state) => async (dispatch) => {
    dispatch({
        type: SHELL_LOG,
        payload: `<b>></b> ${state}`,
    });

    let cmd = state.split(" ");

    switch (cmd[0]) {
        case "help":
            dispatch({
                type: SHELL_LOG,
                payload: `
                    <b>Bash, version 5.0.3(1)-release (x86_64-nodejs)</b>
                    <br/> A star (*) next to a name means that the command is disabled. <br/>
                    <br/> campos* [--x x_pos] [--y y_pos] [--z z_pos]
                    <br/> camrot* [--x x_rot] [--y y_rot] [--z z_rot]
                    <br/> clear
                    <br/> physics* [--enable] [--disable]
                    <br/> motion* [--list] [--play motion_name.vmd]
                `,
            });
            break;
        case "clear":
            dispatch({
                type: SHELL_LOG_CLEAR,
            });
            dispatch({
                type: SHELL_LOG,
                payload: "<i>Console was cleared</i>",
            });
            break;
        default:
            dispatch({
                type: SHELL_LOG,
                payload: `-bash: ${cmd[0]}: command not found`,
            });
            break;
    }
};
