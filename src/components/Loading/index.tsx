import "./index.scss";

type LoadingProps = {
  full?: boolean;
};

function Loading(props: LoadingProps) {
  const { full = true } = props;

  if (full)
    return (
      <div className="loading">
        <div className="loading-container">
          <div className="loading-container-item"></div>
          <div className="loading-container-item"></div>
          <div className="loading-container-item"></div>
          <div className="loading-container-item"></div>
        </div>
      </div>
    );

  return (
    <div className="loading-container">
      <div className="loading-container-item"></div>
      <div className="loading-container-item"></div>
      <div className="loading-container-item"></div>
      <div className="loading-container-item"></div>
    </div>
  );
}

export default Loading;
