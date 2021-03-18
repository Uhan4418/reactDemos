import React, { Suspense } from 'react';
import MyErrorBoundary from '../components/errorBoundaries';

const AnotherComponent = React.lazy(() => import('../formdemo'));
const OtherComponent = React.lazy(() => import('../stateUpgrade'));

function MyComponent() {
  return (
    <div>
      <MyErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <OtherComponent />
          <hr/>
          <AnotherComponent />
        </Suspense>
      </MyErrorBoundary>
    </div>
  );
}

export default MyComponent