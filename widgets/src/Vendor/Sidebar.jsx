const ownerId = "nearhorizon.near";
const accountId = props.accountId;

return (
  <Widget
    src={`${ownerId}/widget/Vendor.Details`}
    props={{
      accountId,
      onSave: (profile) => {
        Near.call({
          contractName: "social.near",
          methodName: "edit_project",
          args: { data: { [accountId]: { profile } } },
        });
      },
      isAdmin: props.isAdmin,
    }}
  />
);
