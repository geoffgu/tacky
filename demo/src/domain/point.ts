import Point2d from '../math/Point2d';
import { Domain, mutation, reactor } from '@tacky/store';
import { Countertop } from './countertop';
import { Line } from './line';
import { EPointType } from '../types/enum';

export class Point extends Domain {
  @reactor() position: Point2d;
  @reactor type: EPointType;
  @reactor prevLine?: Line;
  @reactor nextLine?: Line;
  @reactor countertop?: Countertop;

  @mutation
  updatePosition = (p: Point2d) => {
    this.position = p;
  }

  constructor({
    position,
    type,
  }: {
    position: Point2d,
    type: EPointType,
    prevLine?: Line;
    nextLine?: Line;
    countertop?: Countertop;
  }) {
    super();
    this.position = position;
    this.type = type;
  }
}
