"use client"
import { EuiSearchBar, EuiErrorBoundary } from "@elastic/eui";
import { SearchBar } from "../components/search";
import ErrorBoundary from "../errors/errorboundary";
 
export default function Landing() {

    return (<div>
        <div>This is the home page</div>
        {/* <ErrorBoundary fallbackComponent={<div>This is for search error fallback</div>}> */}
        <EuiErrorBoundary>
            <SearchBar/>
            </EuiErrorBoundary>
        {/* </ErrorBoundary> */}
        </div>)
}