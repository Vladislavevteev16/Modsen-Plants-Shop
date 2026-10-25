import { Component } from 'react';

import s from './ErrorBoundary.module.scss';

type State = {
  isError: boolean;
  error: Error | null;
};
type ErrorBoundaryProps = {
  children: React.ReactNode;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { isError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { isError: true, error };
  }

  render() {
    const { isError, error } = this.state;

    if (isError) {
      return (
        <div className={s.errorBoundaryContainer}>
          <h2>Что-то пошло не так :(</h2>
          <p>{error?.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
}
