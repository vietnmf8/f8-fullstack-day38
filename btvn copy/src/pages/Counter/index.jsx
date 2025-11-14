import { Button } from "@/components/ui/button";
import PropTypes from "prop-types";
import React, { memo, useCallback, useState } from "react";

/**
 * Counter A
 */
const CounterA = memo(({ count, onIncrease }) => {
    console.log("Count A: re-render");
    return (
        <>
            <h2>Count A is {count}</h2>
            <Button onClick={onIncrease}>Increase Count A</Button>
        </>
    );
});

/* Prop-types & displayName */
CounterA.displayName = "CounterA";
CounterA.propTypes = {
    count: PropTypes.number.isRequired,
    onIncrease: PropTypes.func.isRequired,
};

/**
 * Counter B
 */
const CounterB = memo(({ count, onIncrease }) => {
    console.log("Count B: re-render");
    return (
        <>
            <h2>Count B is {count}</h2>
            <Button onClick={onIncrease}>Increase Count B</Button>
        </>
    );
});

/* Prop-types & displayName */
CounterB.displayName = "CounterB";
CounterB.propTypes = {
    count: PropTypes.number.isRequired,
    onIncrease: PropTypes.func.isRequired,
};

/**
 * Counter
 */
function Counter() {
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);

    console.log("Re-render Comp CHA");

    /* Increase A */
    const handleIncreaseA = useCallback(() => {
        setCountA((prev) => prev + 1);
    }, []);

    /* Increase B */
    const handleIncreaseB = useCallback(() => {
        setCountB((prev) => prev + 1);
    }, []);

    return (
        <div>
            <CounterA count={countA} onIncrease={handleIncreaseA} />
            <CounterB count={countB} onIncrease={handleIncreaseB} />
        </div>
    );
}

export default Counter;
