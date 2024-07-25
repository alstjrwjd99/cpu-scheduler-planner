"use client";
import TaskBlock from './TaskBlock';
import SelectAlgorithm from './SelectAlgorithm';

export default function StackAndAlgorithm() {
    return (
        <section className="p-7 text-black flex space-x-10 h-full w-full">
            <TaskBlock />
            <SelectAlgorithm />
        </section>
    );
}