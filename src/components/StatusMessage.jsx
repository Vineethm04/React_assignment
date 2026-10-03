function StatusMessage({ status }) {
  const getColor = () => {
    if (status === "success") {
      return "green";
    }

    if (status === "error") {
      return "red";
    }

    if (status === "warning") {
      return "orange";
    }

    return "gray";
  };

  return (
    <div
      style={{
        backgroundColor: getColor(),
        color: "white",
        padding: "10px",
        margin: "10px 0",
      }}
    >
      Status: {status}
    </div>
  );
}

export default StatusMessage;