import PropTypes from "prop-types";
import React, { memo, useMemo, useState } from "react";

/* useMemo: caching kết quả của phép tính toán giữa những lần re-render (thay vì những lần tính đi tính lại một logic nào đấy) */

/* Component: Child */
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

function expensive() {
    let result = 0;
    for (let i = 0; i < 3e9; i++) {
        result += i;
    }

    console.log("expensive logic");
    return result;
}

/* Component: UseMemo */
function UseMemo() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    const handleIncrease1 = () => {
        setCount((prev) => prev + 1);
    };

    console.time('time');
    const result = useMemo(() => expensive() + count, [count]);
    console.timeEnd('time');

    console.log(result);

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

export default UseMemo;
