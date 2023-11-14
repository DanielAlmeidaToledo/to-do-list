import React from "react";
import { render, screen } from "@testing-library/react";
import { LoadingProvider, useLoading, LoadingContext } from "./Loading";

describe("Loading Context", () => {
    it("provides loading context values", () => {
        const TestComponent = () => {
            const loadingContext = useLoading();
            return (
                <>
                    <div>
                        {loadingContext.loading ? "Loading..." : "Not Loading"}
                    </div>
                </>
            );
        };

        render(
            <LoadingProvider>
                <TestComponent />
            </LoadingProvider>
        );

        expect(screen.getByText("Not Loading")).toBeInTheDocument();
    });

    it("sets loading to true", () => {
        const TestComponent = () => {
            const { setLoading } = useLoading();
            const handleSetLoading = () => {
                setLoading(true);
            };
            return (
                <>
                    <button onClick={handleSetLoading}>Set Loading</button>
                </>
            );
        };

        render(
            <LoadingProvider>
                <TestComponent />
            </LoadingProvider>
        );

        expect(screen.getByText("Not Loading")).toBeInTheDocument();

        fireEvent.click(screen.getByText("Set Loading"));

        expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    it("sets loading to false", () => {
        const TestComponent = () => {
            const { setLoading } = useLoading();
            const handleSetLoading = () => {
                setLoading(false);
            };
            return (
                <>
                    <button onClick={handleSetLoading}>Set Not Loading</button>
                </>
            );
        };

        render(
            <LoadingProvider>
                <TestComponent />
            </LoadingProvider>
        );

        fireEvent.click(screen.getByText("Set Not Loading"));

        expect(screen.getByText("Not Loading")).toBeInTheDocument();
    });
});
