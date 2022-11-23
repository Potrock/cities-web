import ChunkView from "./ChunkView";

export default function OwnedChunks({ ownedChunks }) {

  if (ownedChunks.length == 0 || !ownedChunks[0]) {
    return <p>You don't own any chunks!</p>;
  } else {
    return (
      <div className="pt-4 pb-4 grid overflow-hidden grid-cols-6 gap-1.5">
        {ownedChunks.map((id) => (
          <ChunkView tokenId={id.toString()} key={id.toString()} owned={true} />
        ))}
      </div>
    );
  }
}
