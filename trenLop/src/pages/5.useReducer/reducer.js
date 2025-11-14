/* 
- Sinh ra để giải quyết vấn đề của useState: Khi trong một Component có quá nhiều state. VD:

    const [state1, setCount1] = useState("")
    const [state2, setCount2] = useState("")
    const [state3, setCount3] = useState("")
    // State N...

có 2 cách giải quyết:
1. Tách thành component nhỏ hơn
2. Quản lý với useReducer

const [state, dispatch] = useReducer(reducer, initialArg)
- state: Giá trị khởi tạo
- dispatch: Quyết định một hành động nào đó, hành động đó được diễn ra trong reducer
- reducer: Một hàm có 2 tham số đầu vào: state (state hiện tại), action (object mô tả hành động gì?)
1. Object mô tả hành động thực hiện: Tăng, giảm, nhảy
2. Logic của hành động được diễn ra trong reducer
3. Dispatch: Đơn giản là quyết định thực hiện hành động nào

Nhiệm vụ của hàm reducer: Xử lý và Trả về state mới. Nếu không trả về thì sẽ là undefined
Component sẽ re-render và trả về state mới
*/

import { DECREASE, INCREASE } from "./consts";

/**
 *
 * @param {*} state là giá trị state hiện tại
 * @param {*} action là một object mô tả hành động sẽ được thực hiện, cấu trúc của nó là {type: "loại_hành_động", payload: "dữ liệu (nếu có)"}
 */

/* 1. Tạo hàm reducer */
const reducer = (state, action) => {
    const { type, payload } = action;
    console.log(state, action);

    switch (type) {
        case INCREASE:
            return state + (payload || 1);
        case DECREASE:
            return state - 1;
        default:
            throw Error(`Action ${type} invalid`);
    }
};

/* 
    Dispatch: Là một hàm, khi gọi hàm này sẽ nhận vào 1 action mô tả hành động đó và kèm dữ liệu (nếu có)
    - Gọi dispatch mỗi khi muốn thực hiện một hành động (logic của hành động này được thực hiện trong reducer)
    - Khi gọi dispatch() => reducer() được gọi
    VD: dispatch({type: "increase"})
    */

export default reducer;
