import { useCounter } from '../hooks/useCounter';

export default function CounterWithCustomHook() {

    const { counter } = useCounter();
    return (
        <>
            <h1>Counter With Hook: { counter }</h1>
            <hr/>

            <button className="btn btn-md btn-success">+1</button>
            <button className="btn btn-md btn-default">Reset</button>
            <button className="btn btn-md btn-danger">-1</button>

        </>
    )
}
