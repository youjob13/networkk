import React, { useEffect, useState } from "react";
import Preloader from "../../common/preloader/Preloader";
import classes from "./ProfileInfo.module.css";

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };
  // if (isFetching) return <Preloader />;
  return (
    <p>
      {!editMode && (
        <div>
          <span
            className={classes.statusInput}
            onDoubleClick={activateEditMode}
          >
            {props.status || "----"}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus
            onBlur={deactivateEditMode}
            value={status}
          />
        </div>
      )}
    </p>
  );
};

export default ProfileStatusWithHooks;
