import React, { FormEvent, useEffect, useState } from "react";
import classes from "./ProfileInfo.module.css";

const ProfileStatusWithHooks = ({ status, updateStatus }: any) => {
  const [editMode, setEditMode] = useState(false);
  const [updatedStatus, setStatus] = useState(status);

  useEffect(() => {
    setStatus(status);
  }, [status]);

  const activateEditMode = (): void => {
    setEditMode(true);
  };
  const deactivateEditMode = (): void => {
    setEditMode(false);
    updateStatus(updatedStatus);
  };
  const onStatusChange = (event: FormEvent): void => {
    const target = event.currentTarget as HTMLInputElement;
    setStatus(target.value);
  };

  return (
    <p>
      {!editMode && (
        <div>
          <span
            className={classes.statusInput}
            onDoubleClick={activateEditMode}
          >
            {status || "----"}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus
            onBlur={deactivateEditMode}
            value={updatedStatus}
          />
        </div>
      )}
    </p>
  );
};

export default ProfileStatusWithHooks;
