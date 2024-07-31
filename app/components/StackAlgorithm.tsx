"use client";
import TaskBlock from './TaskBlock';
import SelectAlgorithm from './SelectAlgorithm';

export default function StackAndAlgorithm() {
    return (
        <section className="p-6 text-black flex space-x-10 w-full">
            <TaskBlock />
            <SelectAlgorithm />
        </section>
    );
}