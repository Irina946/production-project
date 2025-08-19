import React, { Suspense } from "react";
import { ErrorPage } from "widgets/ErrorPage";

interface IErrorBoundaryProps {
    children: React.ReactNode
}

interface IErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
    constructor(props: IErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const children = this.props.children;
        if (hasError) {
            // You can render any custom fallback UI
            return (<Suspense fallback="">
                <ErrorPage />
            </Suspense>);
        }
        return children;
    }

}

export default ErrorBoundary;