import PropTypes from "prop-types";
import { memo, useCallback, useState } from "react";
import React from "react";

/* 
- Hàm setCount:
    - 1. Nhận giá trị mới
    - 2. Nhận một hàm: Hàm đó có vai trò trả ra giá trị mới
        + Hoạt động: Nếu đầu vào là một hàm thì setCount sẽ gọi cái hàm đó, kết quả trả ra trở thành state mới
=> Vậy tại sao lại sinh ra cách 2?
    - Để không bị phụ thuộc vào biến bên ngoài, không cần truyền deps trong useCallback mà tự xử lý nội bộ

*/

/* Child */
const ChildComp = memo(({ count, onIncrease }) => {
    console.log(`re-render`);
    return <h1 onClick={onIncrease}>Count is {count}</h1>;
});

// Display name
ChildComp.displayName = "ChildComp";

// Prop Types
ChildComp.propTypes = {
    count: PropTypes.number.isRequired,
    onIncrease: PropTypes.func.isRequired,
};

function UseState() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    const handleIncrease1 = useCallback(() => {
        setCount((prev) => prev + 1);
    }, []);

    return (
        <div>
            <h1>UseState</h1>
            <ChildComp count={count} onIncrease={handleIncrease1} />
            <button onClick={() => setCount2(count2 + 1)}>
                Count2 is {count2}
            </button>
        </div>
    );
}

export default UseState;
