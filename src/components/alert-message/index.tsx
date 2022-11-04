/**
 * @Author Subhash Jadhav
 * @Description This component renders error or warning messages
 * @param {string or null} error => contains error message string or null
 * @param {string or null} warning => contains warning message string or null
 */

const AlertMessage = (props: {
  error: string | null;
  warning: string | null;
}) => {
  const { error, warning } = props;
  return (
    <div
      className={
        (error && "my-3 bg-red-300 p-3 rounded") ||
        (warning && "my-3 bg-yellow-100 p-3 rounded") ||
        ""
      }
    >
      <h1 className="text-lg" title="alert-message">
        {error}
        {warning}
      </h1>
    </div>
  );
};

export default AlertMessage;
