import * as s from './styles.css';

import {
  GlyphIcon,
  HStack,
  Icon,
  StackAlign,
  StackJustify,
  Typo,
} from '@tapie-kr/inspire-react';

import { type FormApplicationPortfolioType } from '@tapie-kr/api-client';

export default function UploadedFile({ file, onDelete }: {
  file: FormApplicationPortfolioType; onDelete: (id: string) => void;
}) {
  return (
    <HStack
      fullWidth
      align={StackAlign.CENTER}
      justify={StackJustify.BETWEEN}
      className={s.container}
    >
      <HStack spacing={6}>
        <Icon name={GlyphIcon.ATTACH_FILE} />
        <Typo.Petite>{file.filename}</Typo.Petite>
      </HStack>
      <Icon
        name={GlyphIcon.CLOSE}
        onClick={() => onDelete(file.uuid)}
      />
    </HStack>
  );
}
