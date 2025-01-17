const ownerId = "nearhorizon.near";
const search = props.search ?? "";

State.init({
  items: [],
  itemsIsFetched: false,
});

if (!state.itemsIsFetched) {
  Near.asyncView(
    ownerId,
    "get_project_contributions",
    { account_id: context.accountId },
    "final",
    false
  ).then((items) => State.update({ items, itemsIsFetched: true }));

  return <>Loading...</>;
}
const Container = styled.div`
  .cont {
    width: 100% !important;
  }
`;

return (
  <Container>
    <Widget
      src={`${ownerId}/widget/List`}
      props={{
        search,
        items: state.items,
        createItem: ([[project_id, cid], vendor_id]) => (
          <Widget
            src={`${ownerId}/widget/Contribution.Card`}
            props={{ project_id, cid, vendor_id, isVendorView: false }}
          />
        ),
      }}
    />
  </Container>
);
