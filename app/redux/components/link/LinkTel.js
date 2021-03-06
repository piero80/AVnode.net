import { h } from 'preact';

const LinkTel = ({ linkTel, onDelete, intl }) => {

  return (
    <li className="list-group-item justify-content-between">
      {linkTel.type} : <a href={`tel:${linkTel.url}`} target="_blank">{linkTel.url}</a>
      <span>
        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={onDelete}
        >
          <i
            className="fa fa-trash"
            data-toggle="tooltip"
            data-placement="top"
            title={intl.formatMessage({
              id: "delete",
              defaultMessage: "Delete"
            })}
          >
          </i>
        </button>
      </span>
    </li>
  );
};

export default LinkTel;