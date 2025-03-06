export function formatParticipants(participants: string[]): string {
  const count = participants.length;

  switch (count) {
    case 0:
      return '';

    case 1:
      return participants[0];

    case 2:
      return `${participants[0]}, ${participants[1]}`;

    default:
      return `${participants[0]}, ${participants[1]} 외 ${count - 2}명`;
  }
}
